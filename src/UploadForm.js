import React from 'react';

class UploadForm extends React.Component{
  constructor(props) {
    super(props);
    this.AlertUser = this.AlertUser.bind(this);
  }

  AlertUser() {
    alert("You have been alerted");
  }

  render() {
    return (
      <div>
        <form method="POST" action="" enctype="multipart/form-data">
        <p><input type="file" name="file" /></p>
        <p><input onClick={this.AlertUser} type="submit" value="Submit" /></p>
        </form>
      </div>
    );
  }
}

export default UploadForm;
