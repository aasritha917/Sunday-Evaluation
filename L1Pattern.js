let n=5;

for(i=0;i<n;i++){
    let row =""
    for(j=0;j<n;j++){
        if(i==0 || i==n-1 || j==0){
           row += "*"
        }
        else{
            row +=" "
        }
    }
    console.log(row)
}