DROP DATABASE IF EXISTS `hospital`;
CREATE DATABASE IF NOT EXISTS `hospital`;
USE `hospital`;

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `username` varchar(20) NOT NULL COMMENT '아이디',
  `password` varchar(20) NOT NULL COMMENT '비밀번호',
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='사용자 정보';

INSERT INTO user(username, password) VALUES('jm', "123");

DROP TABLE IF EXISTS `logout_list`;
CREATE TABLE IF NOT EXISTS `logout_list` (
  `token` varchar(200) NOT NULL COMMENT 'access(refresh)Token',
  PRIMARY KEY (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='로그아웃 리스트';

DROP TABLE IF EXISTS `patient`;
CREATE TABLE IF NOT EXISTS `patient` (
  `patientId` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '환자 ID',
  `name` varchar(200) DEFAULT NULL COMMENT '환자 이름',
  `ssn` varchar(20) DEFAULT NULL COMMENT '주민번호(7자리)',
  `enssn` varchar(200) DEFAULT NULL COMMENT '암호화 주민번호',
  `birthDate` varchar(8) DEFAULT NULL COMMENT '생일(YYYYMMDD)',
  `cellPhone` varchar(11) DEFAULT NULL COMMENT '핸드폰번호',
  `phone` varchar(11) DEFAULT NULL COMMENT '전화번호',
  `email` varchar(20) DEFAULT NULL COMMENT '이메일',
  `createdAt` varchar(14) DEFAULT NULL COMMENT '생성일시(YYYYMMDDHHMMSS)',
  PRIMARY KEY (`patientId`),
  KEY `patientId` (`patientId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='환자 테이블';

DELETE FROM `patient`;

DROP TABLE IF EXISTS `patient_address`;
CREATE TABLE IF NOT EXISTS `patient_address` (
  `addressId` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '주소 ID',
  `patientId` bigint(20) DEFAULT NULL COMMENT '환자 ID',
  `address1` varchar(20) DEFAULT NULL COMMENT '기본 주소',
  `address2` varchar(20) DEFAULT NULL COMMENT '상세 주소',
  `createdAt` varchar(14) DEFAULT NULL COMMENT '생성일시(YYYYMMDDHHMMSS)',
  PRIMARY KEY (`addressId`) USING BTREE,
  KEY `patientId` (`patientId`) USING BTREE,
  KEY `addressId` (`addressId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='환자 주소 테이블';

DELETE FROM `patient_address`;

DROP TABLE IF EXISTS `patient_image`;
CREATE TABLE IF NOT EXISTS `patient_image` (
  `imageId` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '사진 ID',
  `patientId` bigint(20) DEFAULT '0' COMMENT '환자 ID',
  `imageUrl` varchar(200) DEFAULT NULL COMMENT '사진 경로',
  `imageSize` int(20) DEFAULT NULL COMMENT '사진 크기',
  `imageTxt` varchar(20) DEFAULT NULL COMMENT '사진 확장자',
  `createdAt` varchar(14) DEFAULT NULL COMMENT '생성일시(YYYYMMDDHHMMSS)',
  PRIMARY KEY (`imageId`) USING BTREE,
  KEY `patientId` (`patientId`),
  KEY `pictureId` (`imageId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='환자 사진 테이블';

DELETE FROM `patient_image`;
