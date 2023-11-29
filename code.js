function quicksort(array) {
    var stack = []; 

    stack.push(0, array.length - 1); 

    while (stack.length > 0)
    {
        right = stack.pop(); 
        left = stack.pop(); 

        if (left < right)
        {
            var pivot = choosePivot(array, left, right); 

            stack.push(left, pivot - 1); 
            stack.push(pivot + 1, right); 
        }
    }
    return array;
}

function choosePivot(arr, left, right)
{
    var pivot = arr[right]; 
    var i = left; 

    for (var j = left; j < right; j++)
    {
        if (arr[j] < pivot)
        {
            swap(arr, i, j); 
            i++; 
        }
    }

        swap(arr, i, right); 
        return i; 
}

function swap(arr, i, j)
{
    var tmp = arr[j]; 
    arr[j] = arr[i]; 
    arr[i] = tmp; 
}
