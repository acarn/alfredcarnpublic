<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="ISO-8859-1">
	<title>Books</title>
	<link rel="stylesheet" type="text/css" href="${webRoot}/resources/index/css/index.css?time=${time}">
	<link rel="stylesheet" type="text/css" href="${webRoot}/resources/books/css/books.css?time=${time}">
	<script src="${webRoot}/resources/books/js/books.js?time=${time}"></script>
	<script src="${webRoot}/resources/books/js/search.js?time=${time}"></script>
	<script src="${webRoot}/resources/books/js/explanation.js?time=${time}"></script>
</head>
<body>
	<input id="page" type="hidden" value="${page}"/>
	<input id="titleOrAuthor" type="hidden" value="${titleOrAuthor}"/>
	<input id="size" type="hidden" value="${size}"/>
	<input id="webRoot" type="hidden" value="${webRoot}"/>
	<div id="content">
		<div class="dividerHorizontal"></div>
		<div id="logo">
			<div id="text">
				<h2 id="title">A Demonstration of Java Technologies</h2>
				<h5 id="description"><b>Books Title Search</b></h5>
			</div>
		</div>
		<div class="dividerHorizontal"></div>
		<div id="menu">
			<span id="purpose" class="menuItem">Purpose</span>
			<span id="structure" class="menuItem">Architecture</span>
			<span id="code" class="menuItem">Source Code</span>
			<span id="about" class="menuItem">About</span>
		</div>
		<div class="dividerHorizontal"></div>	
		
		<div id="explanationContainer">
			<div id="explanation">
				<div id="explanationBackground"></div>
				<div id="explanationCover"></div>
				<div id="explanationForeground"><!-- The specific content will be copied here. --></div>
				<div id="explanationBack">&ltrif;</div>
				<div id="explanationClose">&Cross;</div>
				<div id="explanationText"><!-- The specific content will be copied here. --></div>
				<div id="explanationCurrent"></div>
			</div>
			<div id="purposeForegroundContent" class="explanationContent">
				<div id="purposeForeground">
					<div class="purposeBrowser browser"></div>
					<div class="purposeBrowserToEnvironment"></div>
					<div class="purposeEnvironment"></div>
				</div>
				<span id="purposeText"><b>Purpose:</b>&nbsp;This project was created in order to demonstrate the use of different java-based technologies.</span>
				<div id="purposeBack"></div>
			</div>
			<div id="structureForegroundContent" class="explanationContent">
				<div id="structureForeground">
					<div class="structureBrowser browser"></div>
					<div class="structureBrowserToEnvironment"></div>
					<div id="structureEnvironmentLabel" class="structureEnvironment explanationLabel">
						Docker Environment
						<div id="structureWebServerContainer" class="structureWebServerContainer explanationLabel">
							Web Server Container
						</div>
						<div class="structureWebToDatabase"></div>
						<div id="structureDatabaseServerContainer" class="structureDatabaseServerContainer explanationLabel">
							Database Server Container
						</div>
					
					</div>
				</div>
				<span id="structureText"><b>Architecture:</b>&nbsp;This application is a conventional database-driven web application, in which both web and database servers run within their respective docker containers.</span>
				<div id="structureBack"></div>
			</div>
			<div id="environmentForegroundContent" class="explanationContent">
				<div id="environmentForeground">
					<div id="environmentIDE">
						Development
						<ul>
							<li>Eclipse &rarr; Maven Build</li>
						</ul>
						<div id="IDEToStaging"></div>
						<div id="IDEToProduction"></div>
					</div>
					<div id="environmentStaging">
						Staging<br/>
						<ul>
							<li>Local machine with Docker platform installed</li>
							<li>Two running containers from images created from Dockerfiles</li>
						</ul>
					</div>
					<div id="environmentProduction">
						Production - Cloud<br/>
						<ul>
							<li>AWS Cloud Computing</li>
							<li>Machine image with Docker installed</li>
							<li>EC2 instance&rarr;cluster&rarr;service&rarr;task&rarr;two containers</li>
							<li>Containers launched from ECR image repositories uploaded from staging environment</li>
						</ul>
					</div>
				</div>
				<span id="environmentText"><b>Environment:</b>&nbsp;The Docker images are uploaded to the AWS Cloud Computing environment. </span>
				<div id="environmentBack">STRUCTURE</div>
			</div>
			<div id="webForegroundContent" class="explanationContent">
				<div id="webForeground">
					<div id="webWebServer">
						Apache Tomcat
						<div id="webWebProject">Web Project</div>
						<div id="webRestToWeb"></div>
						<div id="webRestProject">Rest Project</div>
						<div id="webJotProject">Jot Project</div>
						<div id="webRestToDataApi"></div>
						<div id="webDataApi">Penguin Random House Rest Service</div>
						<div id="webRestToJot"></div>
						<div id="webJotToDatabase"></div>
						<div id="webDatabaseToRest">Hibernate/MyBatis</div>
						<div id="webDatabase">Oracle Database</div>
					</div>
				</div>
				<span id="webText"><b>Web Server:</b>&nbsp;The rest project implements a rest service which wraps the Penguin service and caches the results in a database. The persistence layer showcases Hibernate and MyBatis libraries, as well as the self-authored Jot library.</span>
				<div id="webBack">STRUCTURE</div>
			</div>
			<div id="webprojForegroundContent" class="explanationContent">
				<div id="webprojForeground">
					<div id="webprojCode">
						Web Project
						<div id="webprojHTML" class="webprojTechnology">HTML</div>
						<div id="webprojCSS" class="webprojTechnology">CSS</div>
						<div id="webprojJS" class="webprojTechnology">Javascript</div>
						<div id="webprojMVC" class="webprojTechnology">Spring MVC</div>
						<div id="webprojJSTL" class="webprojTechnology">JSTL</div>
						<div id="webprojMVN" class="webprojTechnology">Maven</div>
						<div id="webprojJUnit" class="webprojTechnology">JUnit</div>
					</div>
				</div>
				<span id="webprojText"><b>Web Project:</b>&nbsp;The following technologies are used in this project.</span>
				<div id="webprojBack">WEB</div>
			</div>
			<div id="restprojForegroundContent" class="explanationContent">
				<div id="restprojForeground">
					<div id="restprojCode">
						Rest Project
						<div id="restprojMVC" class="restprojTechnology">Spring MVC</div>
						<div id="restprojJackson" class="restprojTechnology">Jackson</div>
						<div id="restprojHibernate" class="restprojTechnology">Hibernate</div>
						<div id="restprojMyBatis" class="restprojTechnology">MyBatis</div>
						<div id="restprojJot" class="restprojTechnology">Jot</div>
						<div id="restprojMaven" class="restprojTechnology">Maven</div>
						<div id="restprojJUnit" class="restprojTechnology">JUnit</div>
					</div>
				</div>
				<span id="restprojText"><b>Rest Project:</b>&nbsp;The following technologies are used in this project.</span>
				<div id="restprojBack">WEB</div>
			</div>
			<div id="jotprojForegroundContent" class="explanationContent">
				<div id="jotprojForeground">
					<div id="jotprojCode">
						Jot Project
						<div id="jotprojDatabase" class="jotprojTechnology">
							Database Object Model
							<div id="jotprojBulkInserting" class="jotprojTechnology">Bulk Inserting</div>
							<div id="jotprojConnectionPooling" class="jotprojTechnology">Connection Pooling</div>
						</div>
						<div id="jotprojDatastructures" class="jotprojTechnology">
							Data Structures
							<div id="jotprojRoundRobin" class="jotprojTechnology">RoundRobin</div>
							<div id="jotprojPool" class="jotprojTechnology">
								Pool<br/>AbstractPool
								<div id="jotprojAbstractPoolToConnectionPooling">Thread safe</div>
							</div>
							<div id="jotprojMatrix" class="jotprojTechnology">Matrix</div>
						</div>
					</div>
				</div>
				<span id="jotprojText"><b>Jot Project:</b>&nbsp;Some personal areas of interest are explored in Jot: Multithreading, data structures and database connection pooling.</span>
				<div id="jotprojBack">WEB</div>
			</div>
			<!-- Source Code -->
			<div id="codeForegroundContent" class="explanationContent">
				<div id="codeForeground">
					<div id="codeContainer">
						<div id="codeSample"></div>
					</div>
				</div>
				<span id="codeText"><img id="codeGitHub"/></span>
				<div id="codeBack"></div>
			</div>
			<!-- About Me -->
			<div id="aboutForegroundContent" class="explanationContent">
				<div id="aboutForeground">
					<table id="aboutTable" cellspacing=5>
						<tr>
							<td id="aboutMe" class="aboutPanel">
								<div id="aboutPhoto"></div>
							</td>
							<td id="aboutCV" class="aboutPanel">
								<b>Senior Full Stack Software Developer</b>
								<br/><i>BMO Financial Group 2010-2018</i>
								<ul class="aboutList">
									<li>Support Request System</li>
									<li>E-Letter System</li>
									<li>Out-of-Office System</li>
								</ul>
								<b>Contact</b>
								<ul>
									<li><a href="mailto:alfredcarn@rogers.com">alfredcarn@rogers.com</a></li>
									<li><img id="aboutLinkedIn"/></li>
								</ul>
							</td>
						</tr>
					</table>
				</div>
				<span id="aboutText"><b></b></span>
				<div id="aboutBack"></div>
			</div>
		</div>
		
		<div id="navigatorSpacerTop"></div>
		<div id="worksNavigator">
			<input id="search" value="${titleOrAuthor}"/>
		</div>
		<div id="navigatorSpacerBottom"></div>
		<table id="works">
			<tr>
				<th>Title</th>
				<th>Subtitle</th>
				<th>Author</th>
			</tr>
			<c:set var="odd" value="true"/>	
			<c:forEach items="${bookResults}" var="itm">
				<c:set var="odd" value="${!odd}"/>
				<tr class="${odd ? 'odd' : 'even'}">
					<td>${itm.title}</td>
					<td>${itm.subtitle}</td>
					<td>${itm.author}</td>
				</tr>
			</c:forEach>
			<tr>
				<th colspan="3">
					<span id="prev">&lt;</span>
					<span id="page">${pageOneBased}</span>
					<span id="next">&gt;</span>
				</th>
			</tr>
		</table>
		<div id="tableSpacerBottom"></div>
		<div id="footer"><span id="contactAlfred">Contact Alfred</span></div>
	</div>
</body>
</html>
