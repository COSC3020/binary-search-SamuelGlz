function binarySearch(list, element) {
    function InnerBinSer(list, element, LocSum){
    
        if (list.length > 0 ){
            mid = Math.floor(list.length /2)
            //console.log("The element in the middle is " + list[mid] + " looking for " + element)
            if (list[mid] == element){
                LocSum = LocSum + mid
                //console.log("              (found) returning: " + LocSum)
                return LocSum
            }
            if(list.length == 1 && list[mid] != element){
                LocSum = -1
                //console.log("              (not found) returning: " + LocSum)
                return LocSum
            }
    
            else {
                if (list[mid] > element){
                    //console.log("mid " + list[mid] + " is higher than " + element + " Current Location Sum is " + LocSum )
                    return InnerBinSer(list.slice(0, mid), element, LocSum)
                }
                else {
                    //console.log("mid is lower than " + element + " Current Location Sum is " + LocSum )
                    return InnerBinSer(list.slice((mid + 1), list.length), element, (LocSum + 1 + mid))
                    }
                }
            }
        return LocSum
        }    
return InnerBinSer(list, element, 0)
}
