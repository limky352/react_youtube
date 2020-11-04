/* import React, { useState } from 'react';

function getNumbers() {}

// const Baseball = (props.value or {value}) => {
const Baseball = () => {
  const [result, setResult] = useState();
  const [value, setValue] = useState();
  const [results, setResults] = useState([]);
  const [count, setCount] = useState();
  const [answer, setAnswer] = useState(getNumbers());

  const onSubmitForm = () => {
    console.log('onSubmitFrom exe');
  };
  const onChange = () => {
    console.log('onChange exe');
  };

  const onChangeInput = () => {
    console.log('onChangeInput exe');
  };

  const multiplyTwo = (num) => {
    return <li>{num * 2}</li>;
  };
  rowData = [];
  return (
    <>
      <h1>{state.result}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={state.value} onChange={onChangeInput} />
      </form>
      <div>시도: {state.count.length}</div>
      <ul>
        {[1, 2, 3, 4, 5].map(multiplyTwo)}
        {[
            { fruit: '사과', taste: '맛있다' },
            { fruit: '사과', taste: '맛없다' },
          ].map((v, i) => {
            return (
              <li key={v.fruit + v.taste}>
                {v.fruit} - {v.taste} , {i}
              </li>
            );
          })}
        {<li>{}{}</li>}
      </ul>
    </>
  );
}; */

// class Baseball extends Component {

//   render() {
//     return (

//     );
//   }
// }

// export default Baseball;

// import React, { Component } from 'react';

// function getNumbers() {}

// class Baseball extends Component {
//   state = {
//     result: '',
//     value: '',
//     results: [],
//     count: [0, 1, 2, 3, 4],
//     answer: getNumbers(),
//   };

//   onSubmitForm = () => {
//     console.log('onSubmitFrom exe');
//   };
//   onChange = () => {
//     console.log('onChange exe');
//   };

//   onChangeInput = () => {
//     console.log('onChangeInput exe');
//   };

//   multiplyTwo = (num) => {
//     return <li>{num * 2}</li>;
//   };
//   render() {
//     return (
//       <>
//         <h1>{this.state.result}</h1>
//         <form onSubmit={this.onSubmitForm}>
//           <input
//             maxLength={4}
//             value={this.state.value}
//             onChange={this.onChangeInput}
//           />
//         </form>
//         <div>시도: {this.state.count.length}</div>
//         <ul>
//           {[1, 2, 3, 4, 5].map(this.multiplyTwo)}
//           {/* {[
//             { fruit: '사과', taste: '맛있다' },
//             { fruit: '사과', taste: '맛없다' },
//           ].map((v, i) => {
//             return (
//               <li key={v.fruit + v.taste}>
//                 {v.fruit} - {v.taste} , {i}
//               </li>
//             );
//           })} */}
//           {/* <li>{}{}</li> */}
//         </ul>
//       </>
//     );
//   }
// }

// export default Baseball;
