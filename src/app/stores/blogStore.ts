import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { BlogData } from "../models/blogData";

export default class BlogStore {
    blogs: BlogData[] = [];
    blog: BlogData | undefined = undefined;

    constructor() {
        makeAutoObservable(this);
    }
    loadBlogs = async () => {
        try {
            const result = await agent.blog.list();
            runInAction(() => {
                this.blogs = result;
            });
        } catch (error) {
            console.log(error);
        }
    };

    loadBlog = async (id: string) => {
        try {
            const result = await agent.blog.details(id);
            this.blog = result;
        } catch (error) {
            console.log(error);
        }
    };

}