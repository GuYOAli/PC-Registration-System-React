import React from "react";
import Joi from "joi-browser";
import { getPc, savePc } from "../../StudentData/studentInfo";
import { getActions} from "../../StudentData/actions"
import Form from "../../StudentData/form"

class StudentForm extends Form {
    state = { 
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
          },
          actions: [],
          errors: {}
     }

    schema = {
        _id: Joi.string(),
        title: Joi.string()
          .required()
          .label("Title"),
        genreId: Joi.number()
        .required()
        .label("Genre")
        .min(0)
        .max(100),
        numberInStock: Joi.number()
          .required()
          .min(0)
          .max(100)
          .label("Number in Stock"),
        dailyRentalRate: Joi.string()
          .required()
          .min(0)
          .max(100)
          .label("Daily Rental Rate")
      };

      componentDidMount() {
        const action = getActions();
        this.setState({ action });
    
        const pcId = this.props.match.params.id;
        if (pcId === "new") return;
    
        const pc = getPc(pcId);
        if (!pc) return this.props.history.replace("/studentform");
    
        this.setState({ data: this.mapToViewModel(pc) });
      };

      mapToViewModel(pc) {
        return {
          _id: pc._id,
          name: pc.name,
          Id: pc.Id,
          dept: pc.dept,
          pc_type: pc.pc_type
        };
      };

      doSubmit = () => {
        savePc(this.state.data);
    
        this.props.history.push("/admin");
      };

    render() { 
        return ( 
            <div>
                <h1>Registration Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Full Name")}
                    {this.renderInput("numberInStock", "ID", "number")}
                    {this.renderInput("genreId", "Department")}
                    {this.renderInput("genreId", "PC Type")}
                    {this.renderInput("dailyRentalRate", "Serial Number")}
                    {this.renderButton("Save")}
                </form>
            </div>
         );
    }
}
 
export default StudentForm;
