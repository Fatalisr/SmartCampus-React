<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240327152750 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE intervention CHANGE type type VARCHAR(15) NOT NULL check (type in (\'INSTALLATION\',\'MAINTENANCE\')), CHANGE state state VARCHAR(15) NOT NULL check (state in (\'EN_COURS\',\'FINIE\',\'ANNULEE\'))');
        $this->addSql('ALTER TABLE room CHANGE facing facing VARCHAR(1) NOT NULL check (facing in (\'N\',\'S\',\'E\',\'W\'))');
        $this->addSql('ALTER TABLE sa CHANGE state state VARCHAR(20) NOT NULL check (state in (\'INACTIF\',\'ACTIF\',\'MAINTENANCE\',\'A_INSTALLER\'))');
        $this->addSql('ALTER TABLE user CHANGE password password VARCHAR(255) NOT NULL, CHANGE role role VARCHAR(20) NOT NULL check (role in (\'PERSONNEL\',\'TECHNICIEN\'))');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE sa CHANGE state state VARCHAR(20) NOT NULL');
        $this->addSql('ALTER TABLE intervention CHANGE type type VARCHAR(15) NOT NULL, CHANGE state state VARCHAR(15) NOT NULL');
        $this->addSql('ALTER TABLE room CHANGE facing facing VARCHAR(1) NOT NULL');
        $this->addSql('ALTER TABLE user CHANGE password password VARCHAR(30) NOT NULL, CHANGE role role VARCHAR(20) NOT NULL');
    }
}
