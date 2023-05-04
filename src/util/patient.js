const {Mydb} = require("../db/connect");

const createPatient = async ({name, ssn, birthDate, cellPhone, phone, email, addresses, images}) => {
    const db = await new Mydb();
    const connection = await db.getConn();
    await connection.beginTransaction()
    try{
        let now = new Date().toLocaleDateString();
        const sql1 = `INSERT INTO patient(name, ssn, birthDate, cellPhone, phone, email, createdAt) VALUES(?, ?, ?, ?, ?, ?, ?);`
        const sql2 = `INSERT INTO patient_address(patientId, address1, address2, createdAt) VALUES(?, ?, ?, ?);`
        const sql3 = `INSERT INTO patient_image(patientId, imageUrl, imageSize, imageTxt, createdAt) VALUES(?, ?, ?, ?, ?);`
        const params1 = [name, ssn, birthDate, cellPhone, phone, email, now]
        const query1 = await db.query(sql1, params1);

        const params2 = [query1.insertId, addresses[0].address1, addresses[0].address2, now]
        const params3 = [query1.insertId, images[0].imageUrl, images[0].imageSize, images[0].imageTxt, now]
        console.log(params2)
        console.log(params3)
        const query2 = await db.query(sql2, params2);
        const query3 = await db.query(sql3, params3);

        await connection.commit();
    }
    catch (err) {
        console.err(err)
        await connection.rollback();
        throw err;
    } finally {
        await connection.release();
    }
}

const searchPatient = async (id) => {
    const db = await new Mydb();
    const connection = await db.getConn();
    await connection.beginTransaction()
    try{
        const sql1 = `select * from patient where patientId=?;`
        const sql2 = `select * from patient_address where patientId=?;`
        const sql3 = `select * from patient_image where patientId=?;`

        let query1 = await db.query(sql1, id);
        const query2 = await db.query(sql2, id);
        const query3 = await db.query(sql3, id);
        await connection.commit();

        let address = [{
            address1: query2[0].address1,
            address2: query2[0].address2,
            createdAt: query2[0].createdAt,
        }]
        let images = [{
            imageUrl: query3[0].imageUrl,
            imageSize: query3[0].imageSize,
            imageTxt: query3[0].imageTxt,
        }]
        query1[0].addresses = address
        query1[0].images = images
        console.log(query1)
        return query1[0]
    }
    catch (err) {
        console.err(err)
        await connection.rollback();
        throw err;
    } finally {
        await connection.release();
    }
}


const updatePatient = async (id, data) => {
    const {name, ssn, birthDate, cellPhone, phone, email, addresses, images} = data;
    const db = await new Mydb();
    const connection = await db.getConn();
    await connection.beginTransaction()
    try{
        const sql1 = `update patient SET name=? where patientId=?;`
        const sql2 = `update patient_address SET address1="?", address2="?" where patientId=?;`
        const sql3 = `update patient_image SET imageUrl="?", imageSize="?", imageTxt="?" where patientId=?;`

        const params1 = [name, id]
        const params2 = [addresses[0].address1, addresses[0].address2, id]
        const params3 = [images[0].imageUrl, images[0].imageSize, images[0].imageTxt, id]
        const query1 = await db.query(sql1, params1);
        const query2 = await db.query(sql2, params2);
        const query3 = await db.query(sql3, params3);
        await connection.commit();

        return true
    }
    catch (err) {
        console.err(err)
        await connection.rollback();
        throw err;
    } finally {
        await connection.release();
    }
}

const delPatient = async (id) => {
    const db = await new Mydb();
    const connection = await db.getConn();
    await connection.beginTransaction()
    try{
        const sql1 = `delete from patient where patientId=?;`
        const sql2 = `delete from  patient_address where patientId=?;`
        const sql3 = `delete from  patient_image where patientId=?;`

        const query1 = await db.query(sql1, id);
        const query2 = await db.query(sql2, id);
        const query3 = await db.query(sql3, id);
        await connection.commit();

        return true
    }
    catch (err) {
        console.err(err)
        await connection.rollback();
        throw err;
    } finally {
        await connection.release();
    }
}

module.exports = {
    createPatient,
    searchPatient,
    updatePatient,
    delPatient
}