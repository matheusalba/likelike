class Post{
    constructor(text){
        this.likes = 0;
        this.dislikes = 0;
        this.text = text;
    }
    
    addLikes(){
        this.likes ++;
    }

    addDislike(){
        this.dislikes ++;
    }

    addText(x){
        this.text = x;
    }

    getLikes(){
        return this.likes;
    }

    getDislikes(){
        return this.dislikes;
    }

    getText(){
        return this.text;
    }
}

export {Post}