import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../storage/db';
import Robot from './Robot';

interface UserAttributes {
    id: number;
    email: string;
    password: string;
    api_key_name?: string | null;
    api_key?: string | null;
    proxy_url?: string | null;
    proxy_username?: string | null;
    proxy_password?: string | null;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public email!: string;
    public password!: string;
    public api_key_name!: string | null;
    public api_key!: string | null;
    public proxy_url!: string | null;
    public proxy_username!: string | null;
    public proxy_password!: string | null;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        api_key_name: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Maxun API Key',
        },
        api_key: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        proxy_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        proxy_username: {
            type: DataTypes.STRING,
            allowNull: true,
            // validate: {
            //     isProxyPasswordRequired(value: string | null) {
            //         if (value && !this.proxy_password) {
            //             throw new Error('Proxy password is required when proxy username is provided');
            //         }
            //     },
            // },
        },
        proxy_password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        tableName: 'user',
    }
);

// User.hasMany(Robot, {
//     foreignKey: 'userId',
//     as: 'robots', // Alias for the relation
//   });

export default User;
