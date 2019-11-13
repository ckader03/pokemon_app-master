$(document).ready(() => {
  console.log('script loaded');

  // listener for submitting the new pokemon form
  $('.new-pokemon-form').on('submit', e => {
    e.preventDefault(); // stops default behavior of page refresh

    // grab values from form
    const name = $('.poke-name-input').val(),
          description = $('.poke-description-input').val(),
          image = $('.poke-image-input').val(),
          type = $('.poke-type-input').val();

    // create new object to send form data in
    const newPokeData = {name: name, description: description, image: image, type: type};

    // console.log(newPokeData);

    // send ajax request to make new pokemon
    $.ajax({
      method: 'POST',
      url: '/api/pokemon',
      data: newPokeData,
      success: response => {
        console.log(response);
        window.location.replace('/pokemon/' + response.id);
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
  }); // ends submit function for new pokemon form


  // send ajax request to edit pokemon informtion
  $('.edit-pokemon-form').on('submit', e => {
    e.preventDefault(); // stops default behavior of page refresh

    // grab values from form
    const name = $('.poke-name-input').val(),
          description = $('.poke-description-input').val(),
          image = $('.poke-image-input').val(),
          type = $('.poke-type-input').val(),
          id = $('.poke-id-input').val();

    // create new object to send form data in
    const modifiedPokeData = {name: name, description: description, image: image, type: type, id: id};

    console.log(modifiedPokeData);

    // send ajax request to make new pokemon
    $.ajax({
      method: 'PUT',
      url: '/api/pokemon/' + id,
      data: modifiedPokeData,
      success: response => {
        console.log(response);
        window.location.replace('/pokemon/' + response.id);
      }, error: msg => {
        console.log(msg);
      }
    }); // ends ajax method
  }); // ends submit function for edit pokemon form

  // delete pokemon button
  $('.delete-pokemon').on('click', () => {
    const pokeId = $('.delete-pokemon').data('id');

    $.ajax({
      method: 'DELETE',
      url: '/api/pokemon/' + pokeId,
      success: response => {
        console.log('success');
        window.location.replace('/pokemon');
      },
      error: msg => {
        console.log(msg)
      }
    }); // ends ajax method
  }); // ends function to delete pokemon on click

}); // ends document.ready
