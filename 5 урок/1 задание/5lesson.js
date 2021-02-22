//5 урок 1 задание 

    const board = document.querySelector('#board')
    const col = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    function CreateLetters(){
        for(var i=0; i<col.length; i++){
            const lett = document.createElement('div');
            lett.classList.add('letters');
            lett.innerHTML = col[i];
            board.append(lett);
        }
    }
    CreateLetters();
    
   function CreateChessBoardColumn(){
    for(var i=0; i<col.length; i++){
        if(i % 2 == 0){
            const black = document.createElement('div');
            black.classList.add('black');
            board.append(black);
        }
        else{
            const white = document.createElement('div');
            white.classList.add('white');
            board.append(white);
        }
    }
}
    function CreateChessBoardRow(){
        for(var i=0; i<col.length; i++){
            if(i % 2 == 0){
                const white = document.createElement('div');
                white.classList.add('white');
                board.append(white);
            }
            else{
                const black = document.createElement('div');
                black.classList.add('black');
                board.append(black);
            }
        }
    }
        function CreateChessBoard(){
            for(var i=0; i<row.length; i++){
                if(i % 2 == 0){
                    CreateChessBoardColumn();
                }
                else{
                    CreateChessBoardRow();
                }
            }
        }
CreateChessBoard();
const num = document.querySelector('#numb');
function CreateNumbers(){
    for(var i=0; i<row.length; i++){
        const numb = document.createElement('div');
        numb.classList.add('numbers');
        numb.innerHTML = row[i];
        num.append(numb);
    }
}

CreateNumbers();