import React from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/platziconf-logo.svg";
import "./styles/BadgeNew.css";
import api from "../api";
import PageLoading from "../components/PageLoading";

class BadgeNew extends  React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null });

        try{
            await api.badges.create(this.state.form);
            this.setState({ loading: false })
            this.props.history.push('/badges');
        }
        catch (error) {
            this.setState({ loading: false, error })
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading/>
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || "FIRST_NAME"}
                                lastName={this.state.form.lastName || "LAST_NAME"}
                                twitter={this.state.form.twitter || "TWITTER"}
                                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://avatars1.githubusercontent.com/u/24369034?s=460&u=a90581d13ceae3f118d917b6f2ead5f44d3a2cdd&v=4"
                            />
                        </div>
                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;