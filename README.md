这是个maven仓库
=
url是https://raw.github.com/calm04061/maven/master
###
这个项目使用

    <plugin>
      <groupId>com.github.github</groupId>
        <artifactId>site-maven-plugin</artifactId>
				<version>0.10</version>
				<configuration>
					<message>Maven artifacts for ${project.version}</message><!-- git commit message -->
					<noJekyll>false</noJekyll> <!--disable webpage processing -->
					<outputDirectory>
            ${project.build.directory}/mvn-repo 
          </outputDirectory><!-- matches distribution management repository url above -->
					<branch>refs/heads/master</branch><!-- remote branch name -->
					<includes>
						<include>**/*</include>
					</includes>
					<repositoryName>maven</repositoryName><!-- github repo name -->
					<repositoryOwner>calm04061</repositoryOwner><!-- github username -->
				</configuration>
				<executions>
					<!-- run site-maven-plugin's 'site' target as part of the build's normal 
						'deploy' phase -->
					<execution>
						<goals>
							<goal>site</goal>
						</goals>
						<phase>deploy</phase>
					</execution>
				</executions>
			</plugin>
由于site-maven-plugin:0.10依赖

    <groupId>org.eclipse.mylyn.github</groupId>
    <artifactId>org.eclipse.egit.github.core</artifactId>
    <version>3.1.0.201310021548-r</version>
此版本在https://repo.eclipse.org/content/repositories/egit-releases/ 能找到
