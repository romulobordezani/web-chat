import guid from '../helpers/guid';

class Message {
  constructor({
    id = guid(),
    content = '',
    userId = (() => {
      throw new Error('Every message requires an User ID.');
    })()
  }) {
    this.id = id;
    this.content = content;
    this.userId = userId;
  }

  get() {
    return {
      id: this.id,
      content: this.content,
      userId: this.userId
    };
  }

  set({ id, content, userId }) {
    this.id = id;
    this.content = content;
    this.userId = userId;
  }
}

export default Message;
