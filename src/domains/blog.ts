export type Blog = {
  title: string;
  body: string;
};

export const initialData = (): Blog => ({
  title: "initial title",
  body: "initial body",
});

export const updateTitle = (blog: Blog, title: string): Blog => ({
  ...blog,
  title,
});

export const updateBody = (blog: Blog, body: string): Blog => ({
  ...blog,
  body,
});
