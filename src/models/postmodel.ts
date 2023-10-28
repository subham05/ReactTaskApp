interface PostItem {
  userName: string;
  caption: string;
  tags: string[];
  id: string;
}

export interface Post {
  body: PostItem[];
}
export interface CreatePost {
  userName: string;
  caption: string;
  tags: string[];
}
