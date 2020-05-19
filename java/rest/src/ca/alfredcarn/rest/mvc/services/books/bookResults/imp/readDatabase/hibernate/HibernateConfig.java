package ca.alfredcarn.rest.mvc.services.books.bookResults.imp.readDatabase.hibernate;

import org.hibernate.cfg.Configuration;

import ca.alfredcarn.gen.ApplicationProperties;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

public class HibernateConfig {
	public Configuration configuration;
	public SessionFactory sessionFactory;
	
	public HibernateConfig() {
		configuration = new Configuration();
		configuration.mergeProperties(ApplicationProperties.getInstance().getProperties());
		configuration.configure("/hibernate.config.xml");
		sessionFactory = configuration.buildSessionFactory();
	}
	
	public Session createSession() {
		return sessionFactory.openSession();
	}
}
