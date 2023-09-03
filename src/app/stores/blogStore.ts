import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Blog } from "../models/Blog";

export default class BlogStore {
    blogs: Blog[] = [];
    blog: Blog | undefined = undefined;

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