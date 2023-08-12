    this.title=title;
    this.author=author;
    this.isbn=isbn;
    this.stock=stock;
    this.cost=cost;
    this.summary=()=>`The ${this.title} by ${this.author} (${this.isbn}) costs ${this.cost}`;
    this.isAvailable=()=>{
        let available;
        if(this.stock>0){
            available = `The ${this.title} is available`;
        }
        else {
            available = `The ${this.title} is not available at the moment`;
        }
        return available;
    }
    
    
    
    
    let day = 'MONDAY';
    
    switch (day) {
      case 'MONDAY':
        console.log('Sad Day...');
      case 'TUESDAY':
        console.log('Ok Ok Day..');
        break;
      case 'WEDNESDAY':
        console.log('Hump Day!');
        break;
      case 'THURSDAY':
        console.log('Now we are talkin!');
        break;
      case 'FRIDAY':
        console.log('TGIF');
      default: {
        console.log('Elvis has left the building...');
      }
    }