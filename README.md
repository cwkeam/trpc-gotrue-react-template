# Theta One

## About Monorepo

## Environment setup

### yarn workspace
Install all dependencies by running `yarn` in project root:
```shell
$ yarn
```
### nginx, certs

Setup certs using mkcert:
```shell
$ mkdir -p nginx/certs
$ cd nginx/certs
$ mkcert -install
$ mkcert "*.localhost.net"
```

Or if on Ubuntu:
```shell
$ sudo apt install libnss3-tools -y
$ wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64
$ sudo cp mkcert-v1.4.3-linux-amd64 /usr/local/bin/mkcert
$ sudo chmod +x /usr/local/bin/mkcert

```

#### Networking

1. The "easy way": Edit `/etc/hosts`
```shell
$ sudo vi /etc/hosts
```

Add the following entries:
```hosts
127.0.0.1   backend.localhost.net
127.0.0.1   gotrue.localhost.net
```

2. The "proper way": Add custom DNS entry using `dnsmasq`
```shell
$ brew install dnsmasq
$ echo "address=/localhost.net/127.0.0.1" >> $(brew prefix)/etc/dnsmasq.conf
$ brew services start dnsmasq # might have to add sudo depending on your system
$ mkdir -p /etc/resolver
$ echo "nameserver 127.0.0.1" >> /etc/resolver/localhost.net
$ sudo launchctl stop homebrew.mxcl.dnsmasq # restart dnsmasq
$ sudo launchctl start homebrew.mxcl.dnsmasq
$ dig localhost.net @127.0.0.1 # test dns
$ ping localhost.net # test local
```

### docker

You should use docker to setup dev environment:
```
$ docker-compose up
```

### Postgres

Once done `docker-compose up`, the database will not work immediately.

Open your favorite PostgreSQL admin tool (e.g. pgAdmin) and open the database just created via Docker. Then run the following query:

```
CREATE USER supabase_admin LOGIN CREATEROLE CREATEDB BYPASSRLS;
CREATE USER supabase_auth_admin NOINHERIT CREATEROLE LOGIN NOREPLICATION PASSWORD 'root';
GRANT supabase_auth_admin TO postgres;


CREATE SCHEMA IF NOT EXISTS auth AUTHORIZATION supabase_auth_admin;
GRANT CREATE ON DATABASE postgres TO supabase_auth_admin;
ALTER USER supabase_auth_admin SET search_path = 'auth';
CREATE SCHEMA IF NOT EXISTS thetaone
```

Then you should see that the database structure is:

thetaone 
> Databases (2)
- postgres
- thetaone
    - Schemas (3)
        - auth (GoTrue maintained schema)
        - public
        - thetaone (Application schema)

In the very first time installing this repo, we need root access inside the container to do all of our set-up. 

1. Do `docker-compose up` with 
```
...
postgres:
    image: postgres:14
    container_name: thetaone_postgres
    user: root
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 10s
      timeout: 5s
      retries: 5
...
```
2. Then do `docker-compose down` after everything is done running
3. Then modify `docker-compose.yml` to: 
```
...
postgres:
    image: postgres:14
    container_name: thetaone_postgres
    user: postgres
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 10s
      timeout: 5s
      retries: 5
...
```
4. `docker-compose up`