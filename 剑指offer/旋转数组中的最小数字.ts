/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 * @param rotateArray
 */
function minNumberInRotateArray1(rotateArray) {
  // wirte code here
  if (rotateArray.length === 0) return 0;
  for (let i = 0; i < rotateArray.length; i++) {
    if (rotateArray[i] > rotateArray[i + 1]) return rotateArray[i + 1];
  }
  return rotateArray[0];
}

function minNumberInRotateArray2(rotateArray) {
  let left = 0,
    right = rotateArray.length - 1;
  while (right - left > 1) {
    let mid = left + ((right - left) >> 1);
    if (rotateArray[mid] > rotateArray[right]) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return Math.min(rotateArray[left], rotateArray[right]);
}
