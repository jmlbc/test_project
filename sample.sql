-- --------------------------------------------------------
-- 호스트:                          192.168.100.5
-- 서버 버전:                        10.0.31-MariaDB - MariaDB Server
-- 서버 OS:                        Linux
-- HeidiSQL 버전:                  12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- hospital 데이터베이스 구조 내보내기
DROP DATABASE IF EXISTS `hospital`;
CREATE DATABASE IF NOT EXISTS `hospital` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `hospital`;

-- 테이블 hospital.patient 구조 내보내기
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

-- 테이블 데이터 hospital.patient:~0 rows (대략적) 내보내기
DELETE FROM `patient`;

-- 테이블 hospital.patient_address 구조 내보내기
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

-- 테이블 데이터 hospital.patient_address:~0 rows (대략적) 내보내기
DELETE FROM `patient_address`;

-- 테이블 hospital.patient_image 구조 내보내기
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

-- 테이블 데이터 hospital.patient_image:~0 rows (대략적) 내보내기
DELETE FROM `patient_image`;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
