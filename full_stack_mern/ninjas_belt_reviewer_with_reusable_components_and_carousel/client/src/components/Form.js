import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

const Form = (props) => {
    const {submitHandler, changeHandler, formInfo} = props;
    return (
        <form onSubmit= {submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" className="form-control" value= {formInfo.name} />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Number of Projects:</label>
                    <input onChange={changeHandler} type="number" name="numProjects" id="" className="form-control" value= {formInfo.numProjects} />
                    

                </div>
                <div className="form-group">
                    <label htmlFor="">Graduation Date:</label>
                    <input onChange={changeHandler} type="date" name="gradDate" id="" className="form-control" value= {moment(formInfo.gradDate).format("YYYY-MM-DD")} />
                    
                    
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile Picture Link:</label>
                    <input onChange={changeHandler} type="text" name="profilePicUrl" id="" className="form-control" value= {formInfo.profilePicUrl} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Is Veteran?</label>
                    {formInfo.isVet? 
                    <input onChange={changeHandler} type="checkbox" name="isVet" id="" className="form-checkbox" value= {formInfo.isVet} checked/> :
                    <input onChange={changeHandler} type="checkbox" name="isVet" id="" className="form-checkbox" value= {formInfo.isVet} />

                    }
                </div>
                <input type="submit" value={props.buttonValue}className="btn btn-success mt-3" />

        </form>
    );
};

Form.propTypes = {};

export default Form;