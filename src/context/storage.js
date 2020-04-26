import React, { Component } from 'react'

const StorageContext = React.createContext();

class StorageProvider extends Component {
  constructor(){
    super();
    this.showAlbums = this.showAlbums.bind(this);
  }

  state = {
    albumId:0,
    albums: [],
    photo: {},
    photos: [],
    photoModalOpened: false,
    loading: false
  }

  showAlbums() {
    this.setState({loading:true},async ()=>{
      let response = await fetch('https://dwaapi.juvasquez88.now.sh/api/albums');
      const json = await response.json();
      this.setState({ albums: json , loading: false});
    });
  }

 handlePhotoModalOpen = (opened) => () =>{
   this.setState({
     photoModalOpened: opened
   })
 }

  handleSelectAlbum = (id) => (e) => {
    e.preventDefault();
    this.setState({loading:true})
    fetch(`https://dwaapi.juvasquez88.now.sh/api/photos?albumId=${id}`).then((response)=>{
      response.json().then((photos)=>{
        this.setState({
          albumId:id,
          photos: photos,
          loading: false
        })
      })
    })
  }

  handleSelectPhoto = (photo) => (e) => {
    this.setState({
      photo:photo,
      photoModalOpened:true
    })
  }

  render() {
    const { children } = this.props;
    return (
      <StorageContext.Provider value={{
        ...this.state,
        selectAlbum: this.handleSelectAlbum,
        selectPhoto: this.handleSelectPhoto,
        openModal: this.handlePhotoModalOpen,
        showAlbums: this.showAlbums
      }}>
        { children }
      </StorageContext.Provider>
    )
  }
}

const StorageConsumer = StorageContext.Consumer;

export { StorageContext, StorageProvider, StorageConsumer }