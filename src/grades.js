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
    return await grades.map(score => {
      return {
        score : +60
      };
    });
  },
  async failingGrades() {
    return await grades.filter(grade => grade <= 75);
  },

async addMoreCurveToGrade(grades = []) {
    return await grades.map(score => {
      return {
        score : +80
      };
    });
  },
  async failingGrades() {
    return await grades.filter(grade => grade <= 75);
  },

  async subtractCurveToGrades(grades = []) {
    return await grades.map(score => {
      return {
        score : -20
      };
    });
  },
  async failingGrades() {
    return await grades.filter(grade => grade <= 75);
  }
};