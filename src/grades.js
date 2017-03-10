export default {

  async transform(grades = []) {
    return await grades.map(score => {
      return {
        score
      };
    });
  },


  /**
   * Add 10 to every grade, change the shape of the items in the array to be an object [{ score: 60 }]
   * @param grades
   * @returns {Promise.<void>}
   */
  async addCurveToGrade(grades = []) {
    
  }
}
