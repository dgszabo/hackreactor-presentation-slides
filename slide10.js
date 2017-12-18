





/*                      Write a function that adds
                      from two invocations.

                        addf(3)(4) //=> 7
*/
function addf(num1) {
	return function(num2) {
		return num1 + num2;
	}
}