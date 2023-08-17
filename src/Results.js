import React from "react";
import Phonetics from "./Phonetics";
import Meaning from "./Meaning";


export default function Results(props) {
  if (props.results) {
    return (
    <div className="Results">
      <section>
      <h2 className="the-word">{props.results.word}</h2>
       <h3 className="text-secondary mb-3">
       {props.results.phonetics.map(function 
       (phonetic, index) {
        return (
          <div key={index}>
            <Phonetics phonetics={phonetic} />
          </div>
        );
       })}
       </h3>
       </section>       
      {props.results.meanings.map(function
      (meaning, index) {
        return (
          <div key={index}>
            <section>
            <Meaning meaning={meaning} />
            </section>
            </div>
        );
      })}
      </div>
      );
  } else {
      return null;
  } 
}