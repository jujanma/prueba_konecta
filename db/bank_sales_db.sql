-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: bank_sales_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product` enum('Credito de Consumo','Libranza Libre Inversión','Tarjeta de Credito') NOT NULL,
  `amount` int NOT NULL,
  `franchise` enum('AMEX','VISA','MASTERCARD') DEFAULT NULL,
  `rate` decimal(4,2) DEFAULT NULL,
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `status` enum('Abierto','En Proceso','Finalizado') DEFAULT 'Abierto',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `createdBy` (`createdBy`),
  KEY `updatedBy` (`updatedBy`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`createdBy`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`updatedBy`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Credito de Consumo',90000000,NULL,1.20,1,1,'Abierto','2024-10-19 16:16:34','2024-10-20 13:43:37'),(2,'Libranza Libre Inversión',80000000,NULL,1.75,NULL,1,'En Proceso','2024-10-19 16:16:34','2024-10-20 13:53:07'),(3,'Tarjeta de Credito',10000000,'VISA',2.10,3,1,'Finalizado','2024-10-19 16:16:34','2024-10-20 13:53:29'),(4,'Libranza Libre Inversión',3000000,NULL,1.25,1,1,'Abierto','2024-10-19 16:16:34','2024-10-20 13:54:42'),(9,'Tarjeta de Credito',90000000,'AMEX',2.30,4,4,'Finalizado','2024-10-20 15:15:43','2024-10-20 15:15:43'),(10,'Tarjeta de Credito',18000000,'AMEX',NULL,4,4,'En Proceso','2024-10-20 15:17:19','2024-10-20 15:17:19'),(11,'Tarjeta de Credito',18000000,'AMEX',NULL,4,4,'En Proceso','2024-10-20 15:17:33','2024-10-20 15:17:33'),(12,'Tarjeta de Credito',80000000,NULL,NULL,4,4,'Finalizado','2024-10-20 15:19:54','2024-10-20 15:30:44'),(13,'Tarjeta de Credito',40000000,'MASTERCARD',NULL,4,4,'En Proceso','2024-10-20 15:20:31','2024-10-20 15:20:31'),(14,'Tarjeta de Credito',40000000,'MASTERCARD',NULL,4,4,'En Proceso','2024-10-20 15:21:46','2024-10-20 15:21:46'),(15,'Credito de Consumo',100000,NULL,40.30,4,4,'Finalizado','2024-10-20 15:32:03','2024-10-20 15:32:03');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` enum('Administrador','Asesor') NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Juan Pedro','juan.perez@example.com','$2a$10$4JLJaYQuo/zUTpdOjU..suVsXeBW7HQOsCHZL.wSHt4DWshn3jbaC','Administrador','2024-10-19 16:15:45','2024-10-20 15:22:42'),(3,'Carlos Sánchez Jaramillo','carlos.sanchez@example.com','$2a$10$u1QkV0M40.mozacRYf5XIOyTcn315.S7DBTCysQVX26pPJflNgucu','Administrador','2024-10-19 16:15:45','2024-10-20 14:44:39'),(4,'Simon Gonzalez','simongonzalezechavarria@gmail.com','$2a$10$6i12xzbV/4/8kjAJraVy..EwlaE5EZLhW5ocHU3XCXouB6cB4uQnm','Administrador','2024-10-20 09:22:00','2024-10-20 09:22:00'),(6,'Alguien Pedro','simongonzalezechavarria@outlook.com','$2a$10$GgzAP8JRKBC6SEfqf064L.U5peFdZTFJsayGYuK4vaqRKVulwJ28C','Asesor','2024-10-20 15:12:19','2024-10-20 15:12:19'),(8,'Alguien Pedro','simongonzalezechavarria@yahoo.com','$2a$10$UqQ/0fqv0tY7FjbM8fIMAe/MjKaJSFzMhNopZtHwY/mvUa.fm1Tcm','Asesor','2024-10-20 15:12:55','2024-10-20 15:12:55'),(9,'Test Gutierrez','test@myemail.com','$2a$10$0sdJhVYKaJkTN7tHZdLE1OvSJ56mY3g2XzCmag7x82Cay4Ht94Pp6','Asesor','2024-10-20 15:23:16','2024-10-20 15:23:16'),(13,'Test Gutierrez','test4@myemail.com','$2a$10$1WIBRvtQz6h74VwXczIJfupHmZrQVX2VMNbDVXr78GJyM815QyOJC','Asesor','2024-10-20 15:29:32','2024-10-20 15:29:32'),(14,'Test Gutierrez','test5@myemail.com','$2a$10$20fRhfUzRW/eBVYDSC97I.6VsGOe/KEQRJyeaGgcIGn4qWsUD4Qn2','Asesor','2024-10-20 15:29:53','2024-10-20 15:29:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-20 10:45:17
