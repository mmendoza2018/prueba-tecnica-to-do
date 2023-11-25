-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3310
-- Tiempo de generación: 25-11-2023 a las 22:06:34
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba-tecnica`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `TASK_id` int(11) NOT NULL,
  `TASK_description` varchar(250) DEFAULT NULL,
  `TASK_status_task` varchar(50) NOT NULL DEFAULT 'pendiente',
  `TASK_status` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`TASK_id`, `TASK_description`, `TASK_status_task`, `TASK_status`) VALUES
(17, 'nueva tareaff', 'aprobado', 1),
(19, 'nueva tarea', 'terminado', 1),
(21, 'hola', 'terminado', 1),
(24, 'esta tarea pronto estara terminada', 'terminado', 1),
(25, 'esta tarea pronto estara terminada', 'terminado', 1),
(35, 'esta es una nueva tarea', 'terminado', 1),
(36, 'esta es una nueva tarea', 'pendiente', 1),
(37, 'esta es una nueva tarea', 'pendiente', 1),
(38, 'esta es una nueva tarea', 'pendiente', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`TASK_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `TASK_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
