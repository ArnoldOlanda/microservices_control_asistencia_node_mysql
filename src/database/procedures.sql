
-- describe empleado;
-- use control_asistencia;
delimiter //
create procedure sp_verifica_password(in dni_ varchar(8),in contrasena_ varchar(50))
begin
	select nombre from empleado where dni=dni_ and contrasena=contrasena_;
end//

DELIMITER //  
CREATE PROCEDURE listarEmpleados()
BEGIN
    SELECT e.dni,e.nombre,e.apellidos,e.celular,e.correo,e.direccion,e.genero
    ,c.cargo ,h.descripcion 'horario',e.contrasena,t.tipo 'rol',e.estado FROM `empleado`as e 
    INNER join cargo as c on e.cod_cargo = c.codigo 
    inner join horario as h on e.cod_horario=h.codigo 
    INNER JOIN tipo_usuario AS t on e.tipo_usu=t.codigo;
END//


DELIMITER //
CREATE PROCEDURE sp_busca_empleado (in documento varchar(8))
BEGIN
    SELECT * from empleado where dni=documento;
END//
DELIMITER ;

drop procedure sp_inserta_actualiza_empleado
DELIMITER //
CREATE PROCEDURE sp_inserta_actualiza_empleado (
    IN doc varchar(8),
    in nom varchar(30),
    in ape varchar(50),
    in cel varchar(9),
    in corr varchar(50),
    in direc varchar(40),
    in gen char(1),
    in carg int,
    in pass varchar(50),
    in tipo int,
    in accion varchar(10))
BEGIN
    if accion='insertar' then
        insert into empleado 
        (dni,nombre,apellidos,celular,correo,direccion,genero,cod_cargo,contrasena,tipo_usu) 
        values(doc,nom,ape,cel,corr,direc,gen,carg,pass,tipo);
        set @mensaje='Empleado registrado';
        select @mensaje 'mensaje';
    end if;
    if accion='actualizar' then
        update empleado set
        nombre=nom,
        apellidos=ape,
        celular=cel,
        correo=corr,
        direccion=direc,
        genero=gen,
        cod_cargo=carg,
        contrasena=pass,
        tipo_usu=tipo
        where dni=doc;

        set @mensaje='Empleado actualizado';
        select @mensaje 'mensaje';
    end if;
END//
DELIMITER ;




