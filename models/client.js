'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Op } = require("sequelize");
const sequelizePaginate = require('sequelize-paginate');
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(11)
    },
    fname: {
      type: DataTypes.STRING(255),
      allowNull:false
    },
    lname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull:false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:true,
      defaultValue:null
    },
    profile: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    indexes: [
      // add a FULLTEXT index
      { type: 'FULLTEXT', name: 'fname', fields: ['fname', 'lname'] }
    ],
  });
  
  Client.associate = function(models) {
  };

  sequelizePaginate.paginate(Client);

  const exp = 60*60*24*30*6;
  const exp2 = 60*60*24*30*12;


  
  Client.createTokens = async(client, SECRET ) =>{
    const createToken = jwt.sign({ client},SECRET, {expiresIn: exp});

    return [createToken];
  }

  Client.tryLogin = async (mobile, password, { models, req }) => { 

    const client = await models.Client.findOne({
        where:{
            [Op.and]:[
                {'mobile': mobile},
                {'flag': true}
            ]
        }
    });


    if(!client){
      return {
        ok: false,
        errors: [
            {
                path: "login",
                message: 'کاربر یافت نشد.'
            }
        ],
      }
    }

    let isValid = await bcrypt.compare(password, client.password);


    if(!isValid){
      return {
        ok: false,
        errors: [
            {
                path: "login",
                message: 'پسورد مطابقت ندارد'
            }
        ],
      }
    } 


   

    return {
        ok: true,
        token,
        client
    }
  }

  Client.checkToken = async(req, models, SECRET) =>{
    const token = req.headers['auth-token'] || '';
    if(token){
      try {
        const { client } = jwt.verify(token, SECRET);
        const getClient = await models.Client.findOne({
          where:{
              [Op.and]:[
                  {'id': client.id},
                  {'isDeleted': false}
              ]
          },
        });
     
        return getClient;
      } catch (error) {
       // error
      }
    }
  }

  return Client;
};