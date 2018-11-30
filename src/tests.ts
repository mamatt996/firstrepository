const nome= "pippo";
let cognome;
cognome="pippone";
let age: number;
age=18;

let hasPowers: boolean=true;

const children:string[]=["ciao","ss","dss"];

let Person:{
    nome:string
    age:number
};

Person={nome:"Pippo",age:30};

function go(direction:string="left", distance:number=100){
    console.log(direction,distance);
}
go();
go("right");
go("left",50);

function drive(param:any){

}

drive({distance:100});

function add(x:number,y:number){
    return x+y;
}

add(10,50)+100;

const add2=function(x){

};

const add3=(x)=>{

};

const add4=(x)=>x*2;

const add5=function(x){
    return x*2;
}

const add6=(x)=>{
return x*2;
}; 
/* questa utilizziamo*/




