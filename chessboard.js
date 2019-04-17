let h=Number(prompt("Enter the height"));
let w=Number(prompt("Enter the width"));
for(let i=0;i<h;i++)
	{for (let j=0;j<w;j++)
		{
		if(i%2==0)
			{
			if(j%2==0)
			document.write("_");
			else
				document.write("#");
			if(j==w-1)
				document.write("<br>");
			}
			
		else
			{
			if(j%2==0)
			document.write("#");
			else
				document.write("_");
			if(j==w-1)
				document.write("<br>");
			}
		}	
	}



			