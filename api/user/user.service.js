const pool = require("../../config/database");
module.exports = {
    create: (data, callBack) => {
        pool.query(`insert into registration(APPLICANT_NUM, NAME_OF_CANDIDATE, COMMUNITY, APPLICANT_RANK, AGGR_MARK, COLLEGE_CODE, BRANCH_CODE, ALLOTTED_CATEGORY)
        values(?,?,?,?,?,?,?,?)`,
        [
            date.APPLICANT_NUM,
            data.NAME_OF_CANDIDATE,
            data.COMMUNITY,
            data.APPLICANT_RANK,
            data.AGGR_MARK,
            data.COLLEGE_CODE,
            data.BRANCH_CODE,
            data.ALLOTTED_CATEGORY
        ],
        (error, results, fields) => {
            if(error){
                callBack(error);
            }
            return callBack(null, results);
        }

        ); }
};