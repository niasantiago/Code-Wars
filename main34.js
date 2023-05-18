function countSquares(cuts) {
    if (cuts === 0) {
      return 1; // Only the original solid blue cube exists
    } else {
      const cubesInEachDimension = cuts + 1;
      const totalCubes = cubesInEachDimension ** 3;
      const enclosedCubes = (cuts - 1) ** 3; // Excluding the completely enclosed cubes
      const cubesWithRedFaces = totalCubes - enclosedCubes;
      return cubesWithRedFaces;
    }
  }
  