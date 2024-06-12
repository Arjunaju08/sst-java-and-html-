class age{
    constructor(x){
        this.x=x;
    }
     ages(){    
    const tod=new Date();
    let age=tod.getFullYear()-this.x;
    return age;
    }
}
  const result=new age(2003);
  console.log(result.ages());

