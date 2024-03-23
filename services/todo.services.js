const todoRepositories = require("../repositories/todo.repositories");
class TodoServices {
  static findAll = async (param) => {
    try {
      const data = await todoRepositories.findAll(param);
      const result = {
        status: 200,
        message: "successfully get data",
        data: data,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  static findOne = async (param) => {
    try {
      const data = await todoRepositories.findOne(param);
      const result = {
        status: 200,
        message: "get data by id successfully",
        data: data,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  static create = async (param) => {
    try {
      const data = await todoRepositories.create(param);
      const result = {
        status: 201,
        message: "successfully insert data",
        data: data,
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;
      await todoRepositories.update(id, body);
      const result = {
        status: 201,
        message: "successfully updated data",
      };
      return result;
    } catch (error) {
      throw error;
    }
  };

  static delete = async (id) => {
    try {
      const optionWhere = {
        where: {
          id,
        },
      };
      await todoRepositories.delete(optionWhere);
      const result = {
        status: 200,
        message: "successfully deleted data",
      };
      return result;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = TodoServices;
