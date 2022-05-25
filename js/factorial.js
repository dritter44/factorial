exports.factorial = function(num) {
        if(num === 0){
            return 1
        }
        else if (num === 1){
          return num;
        } else {
          return num * this.factorial(num - 1)
        }
      }
    


