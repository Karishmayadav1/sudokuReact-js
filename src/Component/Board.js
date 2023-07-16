import React, { useEffect } from 'react';


import  {useState} from 'react';



function Board() {
  const[gameStatus, setGameStatus]= useState("unsloved");

  var solvedSuduko = [5, 3, 4, 6, 7, 8, 9, 1, 2,
    6, 7, 2, 1, 9, 5, 3, 4, 8,
    1, 9, 8, 3, 4, 2, 5, 6, ,
    8, 5, 9, 7, 6, 1, 4, 2, 3,
    4, 2, 6, 8, 5, 3, 7, 9, 1,
    7, 1, 3, 9, 2, 4, 8, 5, 6,
    9, 6, 1, 5, 3, 7, 2, 8, 4,
    2, 8, 7, 4, 1, 9, 6, 3, 5,
    3, 4, 5, 2, 8, 6, 1,7 ,9];
    

 // var blankSudoku=[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,];

  var sudoku1=[3,,6,5,,8,4,,,5,2,,,,,,,,,8,7,,,,,3,1,,,3,,1,,,8,,9,,,8,6,3,,,5,,5,,,9,,6,,,1,3,,,,,2,5,,,,,,,,,7,4,,,5,2,,6,3,,];

  const[fillState,setFillState] = useState(solvedSuduko);

  const [squares, setSquares] = useState(
    [ 
      [0,1,2,9,10,11,18,19,20],
      [3,4,5,12,13,14,21,22,23],
      [6,7,8,15,16,17,24,25,26],
      [27,28,29,36,37,38,45,46,47],
      [30,31,32,39,40,41,48,49,50],
      [33,34,35,42,43,44,51,52,53],
      [54,55,56,63,64,65,72,73,74],
      [57,58,59,66,67,68,75,76,77],
      [60,61,62,69,70,71,78,79,80] 
    ]);
  const [rows, setRows] = useState(
    [ 
      [0,1,2,3,4,5,6,7,8], 
      [9,10,11,12,13,14,15,16,17],
      [18,19,20,21,22,23,24,25,26],
      [27,28,29,30,31,32,33,34,35] ,
      [36,37,38,39,40,41,42,43,44] ,
      [45,46,47,48,49,50,51,52,53] ,
      [54,55,56,57,58,59,60,61,62] ,
      [63,64,65,66,67,68,69,70,71] ,
      [72,73,74,75,76,77,78,79,80] 
    ]);
  const [cols, setCols] = useState(
    [[0,9,18,27,36,45,54,63,72],  
    [1,10,19,28,37,46,55,64,73] ,
    [2,11,20,29 ,38,47,56,65,74] ,
    [3,12,21,30,39,48,57,66,75],
    [4,13,22,31,40,49,58,67,76],
    [5,14,23,32,41,50,59,68,77],
    [6,15,24,33,42,51,60,69,78],
    [7,16,25,34,43,52,61,70,79],
    [8,17,26,35,44,53,62,71,80] 
  ]);

  const fillBox = (event, index) => {

    //console.log(event);
    var num=event.key;

    //var data=fillState;
    //data[index]=num;
    //setFillState(data);
    
    var row=parseInt(index/9);
    var col=parseInt(index%9);
    var square=-1;

    for(var i=0; i<squares.length; i++)
    {
      if(squares[i].indexOf(index)>=0){
        square=i;
        break;
      }
    }
     
    //console.log("Row:"+row+",Col:"+col+", Square:"+square);

    var currentSquare=squares[square];
    var currentRow=rows[row];
    var currentColumn=cols[col];

    var squareStatus=false;
    var rowStatus=false;
    var colStatus=false;
    for(var i=0; i<currentSquare.length; i++)
    {
      if(fillState[currentSquare[i]]==num)
      {
        squareStatus=true;
        alert("invalid");
        break;
      }else if(fillState[currentRow[i]]==num){
        rowStatus=true;
        alert("invalid");
        break;
      }else if(fillState[currentColumn[i]]==num){
        alert("invalid");
        colStatus=true;
        break;
      }
    }
    var data=fillState;
    if(squareStatus==false && rowStatus== false && colStatus==false){
      data[index]=event.key;
      setFillState(data);
      checkStatus();
    }
    //console.log(squareStatus);
  }
  //check Stats
  const checkStatus=()=> {
    var count=0;
  for(var i=0; i<fillState.length; i++){
    if(fillState[i]>0){
      count++;
    }
  }
  if(count==fillState.length){
    setGameStatus("Solved");
  }
}
  useEffect(()=>{
    checkStatus();
  });


  return (

    <>
     
    
    <box>suduko</box>
    <div>
      <h1 className='gameStatus'> Suduko Status: {gameStatus}</h1>
    </div>

    
    <div className="outerboard">
        

      <div className="row">

        <div className="col">
          <div className="row">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,0) } value={fillState[0]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,1) } value={fillState[1]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,2) } value={fillState[2]} /> </div>
          </div>
          <div className="row">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,9) } value={fillState[9]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,10) } value={fillState[10]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,11) } value={fillState[11]} /> </div>
          </div>
          <div className="row">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,18) } value={fillState[18]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,19) } value={fillState[19]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,20) } value={fillState[20]} /> </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,3) } value={fillState[3]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,4) } value={fillState[4]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,5) } value={fillState[5]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,12) } value={fillState[12]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,13) } value={fillState[13]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,14) } value={fillState[14]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,21) } value={fillState[21]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,22) } value={fillState[22]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,23) } value={fillState[23]} /> </div>
          </div>
        </div>

        <div className="col">
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,6) } value={fillState[6]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,7) } value={fillState[7]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,8) } value={fillState[8]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,15) } value={fillState[15]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,16) } value={fillState[16]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,17) } value={fillState[17]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,24) } value={fillState[24]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,25) } value={fillState[25]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,26) } value={fillState[26]} /> </div>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col">
          <div className="row">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,27) } value={fillState[27]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,28) } value={fillState[28]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,29) } value={fillState[29]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,36) } value={fillState[36]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,37) } value={fillState[37]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,38) } value={fillState[38]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,45) } value={fillState[45]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,46) } value={fillState[46]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,47) } value={fillState[47]} /> </div>
          </div>
        </div>

        <div className="col">
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,30) } value={fillState[30]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,31) } value={fillState[31]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,32) } value={fillState[32]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,39) } value={fillState[39]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,40) } value={fillState[40]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,41) } value={fillState[41]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,48) } value={fillState[48]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,49) } value={fillState[49]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,50) } value={fillState[50]} /> </div>
          </div>
        </div>

        <div className="col">
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,33) } value={fillState[33]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,34) } value={fillState[34]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,35) } value={fillState[35]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,42) } value={fillState[42]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,43) } value={fillState[43]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,44) } value={fillState[44]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,51) } value={fillState[51]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,52) } value={fillState[52]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,53) } value={fillState[53]} /> </div>
          </div>
        </div>
        
      </div>


      <div className="row">

        <div className="col">
          <div className="row">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,54) } value={fillState[54]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,55) } value={fillState[55]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,56) } value={fillState[56]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,63) } value={fillState[63]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,64) } value={fillState[64]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,65) } value={fillState[65]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,72) } value={fillState[72]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,73) } value={fillState[73]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,74) } value={fillState[74]} /> </div>
          </div>
        </div>

        <div className="col">
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,57) } value={fillState[57]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,58) } value={fillState[58]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,59) } value={fillState[59]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,66) } value={fillState[66]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,67) } value={fillState[67]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,68) } value={fillState[68]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,75) } value={fillState[75]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,76) } value={fillState[76]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,77) } value={fillState[77]} /> </div>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,60) } value={fillState[60]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,61) } value={fillState[61]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,62) } value={fillState[62]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,69) } value={fillState[69]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,70) } value={fillState[70]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (a)=>fillBox(a,71) } value={fillState[71]} /> </div>
          </div>
          <div className="row1">
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,78) } value={fillState[78]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,79) } value={fillState[79]} /> </div>
            <div className="col"> <input type="text" onKeyUp={ (e)=>fillBox(e,80) } value={fillState[80]} /> </div>
          </div>
        </div>
        
      </div>

    </div>
    </>

    
  );
}

export default Board;