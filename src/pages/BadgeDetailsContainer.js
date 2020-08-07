import React from "react";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import BadgeDetails from "./BadgeDetails";
import api from "../api";

class BadgeDetailsContainer extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async() => {
        this.setState({loading: true, error: null});

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({loading: false, data});

        }catch (error) {
            this.setState({loading: false, error});
        }
    }

    handleCloseModal = e => {
        this.setState({modalIsOpen: false});
    }

    handleOpenModal = e => {
      this.setState({modalIsOpen: true});
    };

    handleDeleteBadge = async e => {
        this.setState({loading: true, error: false});
        try {
            await api.badges.remove(this.props.match.params.badgeId);
            this.props.history.push('/badges');
        }catch(error){
            this.setState({loading: false, error});
        }
    }

    render() {
        if(this.state.loading){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }

        return (
            <BadgeDetails
                onOpenModal={this.handleOpenModal}
                onCloseModal={this.handleCloseModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handleDeleteBadge}
                badge={this.state.data}
            />
        )
    }
}

export default BadgeDetailsContainer;