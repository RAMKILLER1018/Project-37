var bgImage;

function setup(){
createCanvas(900,600);
input=createInput().attribute("placeholder", "Enter your name ");
input.position(400,230);

bP=createButton("SUBMIT");
bP.position(450,280);
bP.mousePressed(logic);
}

function draw(){
background("Yellow");
}

function logic(){
input.hide();
bP.hide();

H=createElement("h1");
H.html("Hello! "+input.value() );
H.position(425,10);

A=createElement("h1");
A.html("Let`s see if you can answer this ");
A.position(300,50);

B=createElement("h1");
B.html("Question ");
B.position(425,100);

C=createElement("h2");
C.html("Question => I sometimes have 4 legs, sometimes 2 legs and sometimes even 3 legs.");
C.position(50,200);

E=createElement("h2");
E.html("What am I?");
E.position(50,300);

bp=createButton("SUBMIT");
bp.position(100,550);
bp.mousePressed(logic2);

output=createInput().attribute("placeholder", "Enter your answer");
output.position(400,550);
}

function logic2(){
H.hide();

A.hide();

B.hide();

C.hide();

E.hide();

bp.hide();

output.hide();

W=createElement("h1");
W.html("YOUR ANSWER");
W.position(100,100);

Q=createElement("h2");
Q.html("=>"+ output.value());
Q.position(100,150);

S=createElement("h1");
S.html("CORRECT ANSWER");
S.position(100,300);

E=createElement("h2");
E.html("=> Humans");
E.position(100,350);

D=createElement("h4");
D.html("Explanation: When a Child is Born he/she crawls and uses its hands and legs to walk around so it has ");
D.position(50,500);

E=createElement("h4");
E.html("four legs, when the child grows he starts walking on its two legs, when the child becomes old he walks");
E.position(50,520);

F=createElement("h4");
F.html("around witha stick making it 3 legs!!");
F.position(50,540);
}

