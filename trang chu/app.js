document.addEventListener('DOMContentLoaded', function(){
    const searchIcon = document.getElementById('search-icon');
    const searchForm=document.getElementById('search-form');
    searchIcon.addEventListener('click',function(){
        if(searchForm.style.display==='block'){
            searchForm.style.display='none';
        }else{
            searchForm.style.display='block';
        }

    });
//clickout
document.addEventListener('click',function(event){
    console.log(event.target);
    if (event.target!=searchIcon&&!searchForm.contains(event.target)){
        searchForm.style.display='none';
    }

});



});
//<form action="" id="search-form"> <input type="text" name="keyword" id="keyword" placeholder="Tìm kiếm"> </form>    
