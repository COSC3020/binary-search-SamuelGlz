//Not fully working yet

function binarySearch(list, element) {

    if (list.length > 0 ){
        mid = Math.floor(list.length /2)

        if (list[mid] == element){
            return mid
        }

        if(list.length == 1 && list[mid] != element){
            return -1;
        }

        //Problem when the element is greater than mid

        else {
            if (list[mid] > element){
                ret = binarySearch(list.slice(0, mid), element)
                if (ret == -1 ){
                    return  -1
                }
                return  ret
            }
            else {
                ret = binarySearch(list.slice(mid, list.length), element)
                if (ret == -1 ){
                    return  -1
                }
                console.log(mid + ret + " value of mid + ret " + mid + " " + ret)
                return  mid + ret
            }
        }
    }

    return -1;
}

console.log(" 7 was " + binarySearch([1,2,3,4,5,6,8], 7) + " " + [1,2,3,4,5,6,8]);
console.log(" 8 was " + binarySearch([1,2,3,4,5,6,8], 8) + " " + [1,2,3,4,5,6,8]);
console.log(" 2 was " + binarySearch([1,2,3,4,5,6,8], 2) + " " + [1,2,3,4,5,6,8]);
