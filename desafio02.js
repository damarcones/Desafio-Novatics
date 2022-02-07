// Desafio 02 Novatics
board =
   [["5","3",".",".","7",".",".",".","."]
   ,["6",".",".","1","9","5",".",".","."]
   ,[".","9","8",".",".",".",".","6","."]
   ,["8",".",".",".","6",".",".",".","3"]
   ,["4",".",".","8",".","3",".",".","1"]
   ,["7",".",".",".","2",".",".",".","6"]
   ,[".","6",".",".",".",".","2","8","."]
   ,[".",".",".","4","1","9",".",".","5"]
   ,[".",".",".",".","8",".",".","7","2"]]

   const valida = (board) =>{

        var tam = board.length;
        
        for(var linha = 0; linha < tam; linha++){

            for(var coluna = 0; coluna < tam; coluna++){

                if(board[linha][coluna] != "."){
                        
                    var valor = board[linha][coluna];

                    for(var i = 0; i < tam; i++){

                        if(board[linha][i] == valor && i != coluna){

                            return false;

                        }

                    }

                    for(var i = 0; i < tam; i++){

                        if(board[i][coluna] == valor && i != linha){

                            return false;

                        }

                    }
    
                }
            }
        }
        return true;
    }

    module.exports = {valida};
    
    console.log(valida(board));