export const convertToThousands = (num) => {
	return  num >= 1000  
		? Math.floor(num * 10 / 1000) / 10  + "K"
		: num

}