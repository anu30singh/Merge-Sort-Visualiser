# Merge-Sort-Visualiser
Implementation of merge sort using html/css and javaScript.

# What is Merge Sort
Merge sort is a popular sorting algorithm that follows the "divide and conquer" paradigm. Here's how it works:

1.Divide: The original array is repeatedly divided into smaller arrays until each array contains only one element. This is achieved through recursive calls to the divide step.

2.Conquer: Once the array is divided into single-element arrays (which are inherently sorted), the merging process begins. Pairs of adjacent single-element arrays are merged into sorted sub-arrays. This merging process continues until there is only one sorted array remaining, which is the fully sorted version of the original array.

3.Merge: The merging process involves comparing elements from the two sub-arrays and placing them in order in a new array. This comparison continues until all elements from both sub-arrays have been placed into the new array.

4.Repeat: Steps 1 to 3 are repeated recursively until the entire array is sorted.
The key idea behind merge sort is that it's easier to merge two already sorted arrays into a single sorted array than it is to sort an unsorted array directly. By breaking the problem down into smaller, more manageable sub-problems, merge sort achieves efficient sorting with a time complexity of O(n log n) in the average and worst cases.

In summary, merge sort divides the array into smaller parts, sorts those parts, and then merges them back together in a sorted manner, exploiting the fact that merging sorted arrays is relatively efficient.


# Approach
Initially, a random array will be created utilizing the Math.random() function. The characteristics of the canvas are employed to craft rectangular bars and animations. Distinct colors are applied to signify the division and merging of arrays. Sorting is executed via the JavaScript mergeSort() function. Despite the algorithm's rapid execution, the timeout() function has been utilized to moderate the pace of the process.


