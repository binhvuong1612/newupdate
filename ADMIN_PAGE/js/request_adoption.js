function list_request_adoption(){
    
    var x= document.getElementById("btn_add_user").style.display;
    if (x!="none") {
        document.getElementById("btn_add_user").style.display='none';
        document.getElementById("box-add-user").style.display='none';
        document.getElementById("box-find-user").style.display='none';
        };
    var m= document.getElementById("box-find-request_adoption").style.display;
    if (m!="block") {
      document.getElementById("box-find-request_adoption").style.display='block';
      
      };
    var z= document.getElementById("btn_add_pet").style.display;
    if (z!="none") {
      document.getElementById("btn_add_pet").style.display='none';
      document.getElementById("box-add-pet").style.display='none';
      document.getElementById("box-find-pet").style.display='none';
      };
    var j= document.getElementById("btn_add_video").style.display;
    if (j!="none") {
      document.getElementById("btn_add_video").style.display='none';
      document.getElementById("box-add-video").style.display='none';
      document.getElementById("box-find-video").style.display='none';
      };
    var k= document.getElementById("btn_add_news").style.display;
    if (k!="none") {
      document.getElementById("btn_add_news").style.display='none';
      document.getElementById("box-add-news").style.display='none';
      document.getElementById("box-find-news").style.display='none';
      };

    var l= document.getElementById("btn_add_blog").style.display;
    if (l!="none") {
      document.getElementById("btn_add_blog").style.display='none';
      document.getElementById("box-add-blog").style.display='none';
      document.getElementById("box-find-blog").style.display='none';
      };
    var y= document.getElementById("btn_add_donate").style.display;
    if (y!="none") {
      document.getElementById("btn_add_donate").style.display='none';
      document.getElementById("box-add-donate").style.display='none';
      document.getElementById("box-find-donate").style.display='none';
      };


    show_list_request_adoption= document.getElementById('charts');
    show_list_request_adoption.innerHTML = "";

    task_array = [];//khai bao bien
    //đưa dữ liệu vào id="container" trong
    
    
    firebase.database().ref("Request_Adoption/").once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });


      //tạo vòng lặp để tạo các task 
      for(var i, i = 0; i < task_array.length; i++){
        task_address_adopter = task_array[i][0];
        task_email_adopter = task_array[i][1];
        task_key = task_array[i][2];
        task_name_adopter = task_array[i][3];
        task_pet_adopt = task_array[i][4];
        task_phone_adopter = task_array[i][5];

          //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_adopt = document.createElement('p');
        title_pet_adopt.setAttribute('id', 'title_pet_adopt');
        title_pet_adopt.setAttribute('contenteditable', false);
        title_pet_adopt.innerHTML = "Name Pet : ";

        title_name_adopter = document.createElement('p');
        title_name_adopter.setAttribute('id', 'title_name_adopter');
        title_name_adopter.setAttribute('contenteditable', false);
        title_name_adopter.innerHTML = "Name Adopter: ";

        title_email_adopter = document.createElement('p');
        title_email_adopter.setAttribute('id', 'title_email_adopter');
        title_email_adopter.setAttribute('contenteditable', false);
        title_email_adopter.innerHTML = "Email : ";

        title_phone_adopter = document.createElement('p');
        title_phone_adopter.setAttribute('id', 'title_phone_adopter');
        title_phone_adopter.setAttribute('contenteditable', false);
        title_phone_adopter.innerHTML = "Phone : ";

        title_address_adopter = document.createElement('p');
        title_address_adopter.setAttribute('id', 'title_address_adopter');
        title_address_adopter.setAttribute('contenteditable', false);
        title_address_adopter.innerHTML = "Address : ";


        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        pet_adopt = document.createElement('p');
        pet_adopt.setAttribute('id', 'pet_adopt');
        pet_adopt.setAttribute('contenteditable', false);
        pet_adopt.innerHTML = task_pet_adopt;

        name_adopter = document.createElement('p');
        name_adopter.setAttribute('id', 'name_adopter');
        name_adopter.setAttribute('contenteditable', false);
        name_adopter.innerHTML = task_name_adopter;

        email_adopter = document.createElement('p');
        email_adopter.setAttribute('id', 'email_adopter');
        email_adopter.setAttribute('contenteditable', false);
        email_adopter.innerHTML = task_email_adopter;

        phone_adopter = document.createElement('p');
        phone_adopter.setAttribute('id', 'phone_adopter');
        phone_adopter.setAttribute('contenteditable', false);
        phone_adopter.innerHTML = task_phone_adopter;

        address_adopter = document.createElement('p');
        address_adopter.setAttribute('id', 'address_adopter');
        address_adopter.setAttribute('contenteditable', false);
        address_adopter.innerHTML = task_address_adopter; 
        
        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_request_adoption_button = document.createElement('button');
        task_done_request_adoption_button.setAttribute('id', 'task_done_request_adoption_button');
        task_done_request_adoption_button.setAttribute('class', 'task_done_button');
        task_done_request_adoption_button.setAttribute('onclick', "task_done_request_adoption(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_request_adoption_button = document.createElement('button');
        task_edit_request_adoption_button.setAttribute('id', 'task_edit_request_adoption_button');
        task_edit_request_adoption_button.setAttribute('class', 'task_edit_button');
        task_edit_request_adoption_button.setAttribute('onclick', "task_edit_request_adoption(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_request_adoption_button = document.createElement('button');
        task_delete_request_adoption_button.setAttribute('id', 'task_delete_request_adoption_button');
        task_delete_request_adoption_button.setAttribute('class', 'task_delete_button');
        task_delete_request_adoption_button.setAttribute('onclick', "task_delete_request_adoption(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');

        show_list_request_adoption.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_adopt);
        title_data.append(title_name_adopter);
        title_data.append(title_email_adopter);
        title_data.append(title_phone_adopter);
        title_data.append(title_address_adopter);
        

        task_container.append(task_data);
        task_data.append(pet_adopt);
        task_data.append(name_adopter);
        task_data.append(email_adopter);
        task_data.append(phone_adopter);
        task_data.append(address_adopter);
        

        task_container.append(task_tool);
        task_tool.append(task_done_request_adoption_button);
        task_done_request_adoption_button.append(fa_done);
        task_tool.append(task_edit_request_adoption_button);
        task_edit_request_adoption_button.append(fa_edit);
        task_tool.append(task_delete_request_adoption_button);
        task_delete_request_adoption_button.append(fa_delete);
      }
    });
     
  }
/*------------------------------------------------------------------------*/  
  // button edit, button delete FOR DONATE
  function get_donate(){

  show_list_request_adoption_find= document.getElementById('charts');
  show_list_request_adoption_find.innerHTML = "";

  var name_request_adoption_find= document.getElementById("name_request_adoption_find").value;
  alert(name_request_adoption_find);
  if (name_request_adoption_find!="") {
    firebase.database().ref('Statistical_Donate/'+ name_request_adoption_find).once('value').then(function(snapshort){

    var task_pet_adopt_find = snapshort.val().pet_adopt;
      var task_name_adopter_find= snapshort.val().name_adopter;
      var task_email_adopter_find = snapshort.val().email_adopter;
      var task_phone_adopter_find= snapshort.val().phone_adopter;
      var task_address_adopter_find = snapshort.val().address_adopter;

     
  //tao TASK CONTAINER
        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        task_img = document.createElement("div");
        task_img.setAttribute("class", "task_img");

        image_view = document.createElement('img');
        image_view.setAttribute('id', 'image_view');
        image_view.src = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg";

        //tao TITLE DATA
        title_data = document.createElement("div");
        title_data.setAttribute("class", "title_data");

        title_pet_adopt_find = document.createElement('p');
        title_pet_adopt_find.setAttribute('id', 'title_pet_adopt_find');
        title_pet_adopt_find.setAttribute('contenteditable', false);
        title_pet_adopt_find.innerHTML = "Name Pet : ";

        title_name_adopter_find = document.createElement('p');
        title_name_adopter_find.setAttribute('id', 'title_name_adopter_find');
        title_name_adopter_find.setAttribute('contenteditable', false);
        title_name_adopter_find.innerHTML = "Name Adopter: ";

        title_email_adopter_find = document.createElement('p');
        title_email_adopter_find.setAttribute('id', 'title_email_adopter_find');
        title_email_adopter_find.setAttribute('contenteditable', false);
        title_email_adopter_find.innerHTML = "Email : ";

        title_phone_adopter_find = document.createElement('p');
        title_phone_adopter_find.setAttribute('id', 'title_phone_adopter_find');
        title_phone_adopter_find.setAttribute('contenteditable', false);
        title_phone_adopter_find.innerHTML = "Phone : ";

        title_address_adopter_find = document.createElement('p');
        title_address_adopter_find.setAttribute('id', 'title_address_adopter_find');
        title_address_adopter_find.setAttribute('contenteditable', false);
        title_address_adopter_find.innerHTML = "Address : ";


        //tạo TASK DATA 
        task_data = document.createElement('div');
        task_data.setAttribute('class', 'task_data');

        pet_adopt = document.createElement('p');
        pet_adopt.setAttribute('id', 'pet_adopt');
        pet_adopt.setAttribute('contenteditable', false);
        pet_adopt.innerHTML = task_pet_adopt_find;

        name_adopter = document.createElement('p');
        name_adopter.setAttribute('id', 'name_adopter');
        name_adopter.setAttribute('contenteditable', false);
        name_adopter.innerHTML = task_name_adopter_find;

        email_adopter = document.createElement('p');
        email_adopter.setAttribute('id', 'email_adopter');
        email_adopter.setAttribute('contenteditable', false);
        email_adopter.innerHTML = task_email_adopter_find;

        phone_adopter = document.createElement('p');
        phone_adopter.setAttribute('id', 'phone_adopter');
        phone_adopter.setAttribute('contenteditable', false);
        phone_adopter.innerHTML = task_phone_adopter_find;

        address_adopter = document.createElement('p');
        address_adopter.setAttribute('id', 'address_adopter');
        address_adopter.setAttribute('contenteditable', false);
        address_adopter.innerHTML = task_address_adopter_find; 
        
        //tạo TASK TOOLS
        
        task_tool= document.createElement('div');
        task_tool.setAttribute('class', 'task_tool');

        task_done_request_adoption_button = document.createElement('button');
        task_done_request_adoption_button.setAttribute('id', 'task_done_request_adoption_button');
        task_done_request_adoption_button.setAttribute('class', 'task_done_button');
        task_done_request_adoption_button.setAttribute('onclick', "task_done_request_adoption(this.parentElement.parentElement, this)");
        fa_done = document.createElement('i');
        fa_done.setAttribute('class', 'fa fa-check');


        task_edit_request_adoption_button = document.createElement('button');
        task_edit_request_adoption_button.setAttribute('id', 'task_edit_request_adoption_button');
        task_edit_request_adoption_button.setAttribute('class', 'task_edit_button');
        task_edit_request_adoption_button.setAttribute('onclick', "task_edit_request_adoption(this.parentElement.parentElement, this)");
        fa_edit = document.createElement('i');
        fa_edit.setAttribute('class', 'fa fa-pencil-alt');

        task_delete_request_adoption_button = document.createElement('button');
        task_delete_request_adoption_button.setAttribute('id', 'task_delete_request_adoption_button');
        task_delete_request_adoption_button.setAttribute('class', 'task_delete_button');
        task_delete_request_adoption_button.setAttribute('onclick', "task_delete_request_adoption(this.parentElement.parentElement)");
        fa_delete = document.createElement('i');
        fa_delete.setAttribute('class', 'fa fa-trash');

        show_list_request_adoption.append(task_container);

        task_container.append(task_img);
        task_img.append(image_view);

        task_container.append(title_data);
        title_data.append(title_pet_adopt_find);
        title_data.append(title_name_adopter_find);
        title_data.append(title_email_adopter_find);
        title_data.append(title_phone_adopter_find);
        title_data.append(title_address_adopter_find);
        

        task_container.append(task_data);
        task_data.append(pet_adopt);
        task_data.append(name_adopter);
        task_data.append(email_adopter);
        task_data.append(phone_adopter);
        task_data.append(address_adopter);
        

        task_container.append(task_tool);
        task_tool.append(task_done_request_adoption_button);
        task_done_request_adoption_button.append(fa_done);
        task_tool.append(task_edit_request_adoption_button);
        task_edit_request_adoption_button.append(fa_edit);
        task_tool.append(task_delete_request_adoption_button);
        task_delete_request_adoption_button.append(fa_delete);
 
    })
  };
  if (name_donate_find==""){
    alert("Please do not leave any items blank!");
    list_donate();
  };
    

}
