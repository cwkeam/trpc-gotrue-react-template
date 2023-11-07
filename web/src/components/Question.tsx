import React from "react";

type Props = {};

const Question: React.FC<Props> = ({}) => {
  const testQuestion = `A 75-year-old man presents to Accident and Emergency following a week of productive cough, fever and shortness of breath. He has not had any foreign travel, however is a chronic smoker with a 15 pack/year history.

    Which of the following findings is most likely to be found on examination of this patient’s chest?`;

  const options = [
    "Reduced vocal resonance and dull percussion note",
    "Hyper-resonant percussion note and tracheal deviation to the left",
    "Increased tactile vocal fremitus and dull percussion note",
    "Increased vocal resonance and fine end inspiratory crepitations",
  ];
  const correctAnswerIndex = 0;

  return (
    <div
      style={{
        paddingTop: 300,
        paddingBottom: 300,
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <h1>Test Question 2</h1>

      <p>{testQuestion}</p>

      <div
        style={{
          height: 100,
          width: "100%",
        }}
      >
        {options.map((option) => {
          return (
            <>
              <div
                style={{
                  width: "100%",
                  paddingTop: 12,
                  paddingBottom: 12,

                  textAlign: "start",
                  paddingLeft: 20,
                  borderWidth: 1,
                  border: "1px solid #dddddd",
                  marginTop: 20,

                  borderRadius: 16,
                }}
              >
                <p>{option}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Question;
